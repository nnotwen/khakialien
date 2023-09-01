var globalVars = {};
var verifierIndexVar;

const planetWithMoons = [{
  planet: 'Mars',
  moons: 'deimos|phobos',
},{
  planet: 'Jupiter',
  moons: 'Metis|Adrastea|Amalthea|Thebe|Io|Europa|Ganymede|Callisto|Themisto|Leda|Himalia|Lysithea|Elara|Ananke|Carme|Pasiphae|Sinope|Callirrhoe|Megaclite|Taygete|Chaldene|Harpalyke|Kalyke|Iocaste|Erinome|Isonoe|Praxidike|Autonoe|Thyone|Hermippe|Aitne|Eurydome|Euanthe|Eupheme|Mneme|Orthosie|Thyone|Hermippe|Praxidike|Autonoe|Mneme|Orthosie|Hermione|Eukelade|Eurydome|Euanthe|Eupheme|Orthosie|Thyone|Hermippe|Praxidike|Autonoe|Thyone|Hermippe|Aitne|Eurydome|Euanthe|Eupheme|Mneme|Orthosie|Hermione|Eukelade|Valetudo',
},{
  planet: 'Saturn',
  moons: 'Mimas|Enceladus|Tethys|Dione|Rhea|Titan|Hyperion|Iapetus|Phoebe|Janus|Epimetheus|Helene|Telesto|Calypso|Atlas|Prometheus|Pandora|Pan|Ymir|Paaliaq|Tarvos|Ijiraq|Suttungr|Kiviuq|Mundilfari|Albiorix|Skathi|Erriapus|Siarnaq',
},{
  planet: 'Uranus',
  moons: 'Ariel|Belinda|Bianca|Caliban|Cordelia|Cressida|Cupid|Desdemona|Ferdinand|Francisco|Juliet|Mab|Margaret|Miranda|Oberon|Ophelia|Perdita|Portia|Prospero|Puck|Rosalind|Setebos|Stephano|Sycorax|Thalassa|Titania|Trinculo',
},{
  planet: 'Neptune',
  moons: 'Despina|Galatea|Halimede|Hippocamp|Laomedeia|Larissa|Naiad|Nereid|Neso|Proteus|Psamathe|Sao|Thalassa|Triton'
}];

const elementSymbol = { "2": "He", "3": "Li", "4": "Be", "10": "Ne", "11": "Na", "12": "Mg", "13": "Al", "14": "Si", "20": "Ca", "21": "Sc", "22": "Ti", "23": "V", "24": "Cr", "25": "Mn", "26": "Fe", "27": "Co", "28": "Ni", "29": "Cu", "30": "Zn", "31": "Ga", "32": "Ge", "37": "Rb", "38": "Sr", "39": "Y", "40": "Zr", "41": "Nb", "42": "Mo", "43": "Tc", "44": "Ru", "45": "Rh", "46": "Pd", "47": "Ag", "48": "Cd", "49": "In", "50": "Sn", "55": "Cs", "56": "Ba", "57": "La", "58": "Ce", "59": "Pr", "60": "Nd", "61": "Pm", "62": "Sm", "63": "Eu", "64": "Gd", "65": "Tb", "66": "Dy", "67": "Ho", "68": "Er", "69": "Tm", "70": "Yb", "71": "Lu", "72": "Hf", "73": "Ta", "74": "W", "75": "Re", "76": "Os", "77": "Ir", "78": "Pt", "79": "Au", "80": "Hg", "81": "Tl", "82": "Pb", "83": "Bi", "87": "Fr", "88": "Ra", "89": "Ac", "90": "Th", "91": "Pa", "92": "U", "93": "Np", "94": "Pu", "95": "Am", "96": "Cm", "97": "Bk", "98": "Cf", "99": "Es", "100": "Fm", "101": "Md", "102": "No", "103": "Lr", "104": "Rf", "105": "Db", "106": "Sg", "107": "Bh", "108": "Hs", "109": "Mt", "110": "Ds", "111": "Rg", "112": "Cn"};

function initGlobalVar (){
  globalVars = {
    digitPasswordSum: _.random(40, 80),
    oddOrEven: _.random(0, 1),
    firstIsPrime: _.random(0,1),
    planetWithMoons: _.random(0, planetWithMoons.length - 1),
    elementSymbol: _.random(0, Object.keys(elementSymbol).length - 1),
  };
}
initGlobalVar();

const verifiers = [
  {
    desc: "Your password must contain the first three letters of today's day.",
    fn: (p) =>p.match(RegExp(moment().format("dddd").substring(0, 3), "i")),
  },{
    desc: `The digits of your password must add up to ${globalVars.digitPasswordSum}`,
    fn: (p) => _.sum(p.match(/\d+/g).join('').split('').map(x => Number(x))) === globalVars.digitPasswordSum,
  },{
    desc: "Your password must include one of Minecraft's overworld biomes that only has single word prior to update 1.20",
    fn: (p) => p.match(/forest|plains|swamp|taiga|desert|savanna|jungle|badlands|beach|river|ocean/i),
  },{
    desc: "Your password must include the year when Coca-cola was founded.",
    fn: (p) => p.match("1892"),
  },{
    desc: "Your password must include the name of the smallest country in the world",
    fn: (p) => p.match(/vatican/i),
  },{
    desc: "Your password must include today's Month spelt backwards",
    fn: (p) => p.match(RegExp(moment().format("MMMM").split('').reverse().join(''), 'i'))
  },{
    desc: `The sum of all the digits in your password divided by the last digit rounded to the nearest integer must be ${['even', 'odd'][globalVars.oddOrEven]}`,
    fn: (p) => Math.round(_.sum(p.match(/\d+/g).join('').split('').map(x => Number(x))) / Number(p.match(/\d+/g).join('').split('').pop())) % 2 == globalVars.oddOrEven
  },{
    desc: `The first appearing digit in your password must ${globalVars.firstIsPrime ? 'not be' : 'be' } a prime number.`,
    fn: (p) => p.match(/\d+/)[0].split('')[0].match(RegExp([['1|2|3|5|7'],['4|6|8|9|0']][globalVars.firstIsPrime]))
  },{
    desc: "The first character of your password must contain the alien emoji",
    fn: (p) => p[0].match("\uD83D") && p[1]?.match("\uDC7D")
  },{
    desc: "Your password must contain the hex code for the color khaki",
    fn: (p) => p.match(/F0E68C|C3B091/i),
  },{
    desc: `Your password must contain one of ${planetWithMoons[globalVars.planetWithMoons].planet}'s moons`,
    fn: (p) => p.match(RegExp(planetWithMoons[globalVars.planetWithMoons].moons, 'i')),
  },{
    desc: `Your password must have the emoji "🧪" followed immediately by the element symbol of the element having an atomic number of ${Object.keys(elementSymbol)[globalVars.elementSymbol]}`,
    fn: (p) => p.match(RegExp(`🧪${Object.values(elementSymbol)[globalVars.elementSymbol]}`)),
  }
];

function initVerifier(){
  verifierIndexVar = _.shuffle(Object.keys(verifiers)).slice(0, _.random(20,50));
}

initVerifier();

function init(){
  initGlobalVar();
  initVerifier();
}

$(function () {
  $("#passwordInput").on("keyup", function () {
    const password = $(this).val();

    if (!password.length) {
      return $(this).removeClass("is-invalid");
    } else {
      $(this).addClass("is-invalid");
    }

    // Basic verification
    if (password.match(/ +/)){
      return writeToHelper("Your password cannot contain any space character.");
    }

    if (password.length < 8) {
      return writeToHelper("Your password must be at least 8 characters long.");
    }

    if (!password.match(/[a-z]/)) {
      return writeToHelper("Your password must contain at least a lowercase letter.");
    }

    if (!password.match(/[A-Z]/)) {
      return writeToHelper("Your password must contain at least an uppercase letter.");
    }

    if (!password.match(/[0-9!]/)) {
      return writeToHelper("Your password must contain at least a digit.");
    }

    if (!password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
      return writeToHelper("Your password must contain at least 1 special character.");
    }

    // Heightened Verification
    for (const index of verifierIndexVar) {
      if (!verifiers[index].fn(password)) {
        return writeToHelper(verifiers[index].desc);
      }
    }

    // Final verification
    if (!password.match(RegExp(moment().format("HH:mm")))){
      return writeToHelper("Your password must contain the current time in military format (HH:MM)");
    }

    // Verify
    writeToHelper("Your password is available!", true);
    $("#submitBtn").removeClass("disabled");
  });
});

function writeToHelper(text, success = false) {
  const icnClass = success ? "bi-check-circle" : "bi-exclamation-circle";
  const helpClass = success ? "valid-feedback" : "invalid-feedback";
  const icon = $("<i></i>").addClass(`${icnClass} me-2`);

  if (success) {
    $("#passwordInput").addClass("is-valid").removeClass("is-invalid");
  } else {
    $("#passwordInput").addClass("is-invalid").removeClass("is-valid");
  }

  $("#passwordHelpBlock")
    .html(icon[0].outerHTML + text)
    .attr({
      class: `form-text text-start ${helpClass} user-select-none`,
    });
}

