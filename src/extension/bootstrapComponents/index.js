// This file uses jquery and bootstrap. They must be
// placed above this file for these to work

// Create a bootstrap Modal
class BootstrapModal {
  constructor(id, size) {
    this.id = id;
    this._modal = $(`#${id}`).addClass("modal fade").attr({
      tabindex: -1,
      "aria-labelledby": id,
      "data-bs-backdrop": "static",
    });

    this._dialog = $("<div></div>").addClass("modal-dialog");
    this._content = $("<div></div>").addClass("modal-content csk-2");

    this._includeFooter = true;
  }

  addClass(c) {
    this._modal.addClass(c);
    return this;
  }

  setBackdrop(b) {
    this._modal.attr("data-bs-backdrop", b);
    return this;
  }

  setDialogCentered(bool) {
    if (bool == true) {
      this._dialog.addClass("modal-dialog-centered");
    }
    return this;
  }

  setHeader(header = "Modal Title") {
    this.header = $("<div></div>").addClass("modal-header");

    if (header instanceof jQuery) {
      header.appendTo(this.header);
    } else {
      $("<h5></h5>")
        .addClass("modal-title f-silkscreen")
        .html(header)
        .appendTo(this.header);
    }

    $("<button></button>").addClass("btn-close").appendTo(this.header).attr({
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close",
    });

    return this;
  }

  setBody(body = "Modal Body") {
    this.body = $("<div></div>").addClass("modal-body");

    body = body instanceof jQuery ? body[0].outerHTML : body;
    this.body.html(body);
    return this;
  }

  setFooter(footer = "Modal Footer", btn) {
    this.footer = $("<div></div>").addClass("modal-footer");

    footer = footer instanceof jQuery ? footer[0].outerHTML : footer;
    this.footer.html(footer);

    if (btn === true) {
      $("<button></button>").html("Close").appendTo(this.footer).attr({
        type: "button",
        class: "btn btn-khaki",
        "data-bs-dismiss": "modal",
        "aria-label": "Close",
      });
    }

    return this;
  }

  removeFooter() {
    this._includeFooter = false;
    return this;
  }

  init() {
    this._modal.append(this._dialog);
    this._dialog.append(this._content);
    this._content.append(this.header);
    this._content.append(this.body);
    if (this._includeFooter) this._content.append(this.footer);
  }
}
