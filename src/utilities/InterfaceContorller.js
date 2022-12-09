'use strict'

const { URLs } = require("./Constants");

class InterfaceController {

    constructor({ client }) {
        this.client = client;
    }

    closeNotificationPrompt() {
        const h2s = document.querySelectorAll("h2");
        h2s.forEach(el => {
            var text = el.innerText || el.textContent;

            if (text.toLowerCase().trim() == "turn on notifications") {

                const buttons = document.querySelectorAll('button');

                buttons.forEach(el => {
                    var text = el.innerText || el.textContent;
                    if (text.toLowerCase().trim() == "not now") {
                        el.click();
                    }
                })
            }
        })
    }

    getProfilePicture(username) {
        const imgs = document.querySelectorAll("img");

        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].alt == `${username}'s profile picture`) {
                return imgs[i].src;
            }
        }

        return null;
    }
}

module.exports = InterfaceController;