(function () {

    // Pick a random number of items from a list.
    window.pickRandomFromList = function pickRandomFromList(list, number, excluding) {
        var randomizedList = _.shuffle(list);
        randomizedList = randomizedList.filter(function(item) {
            return item !== excluding;
        });
        return randomizedList.slice(0, number || 1);
    }

    // Return an array of the selected opion values
    // select is an HTML select element
    window.getSelectValues = function getSelectValues(select) {
        var options = select && select.options;

        var result = [];
        for (var option of options) {
            if (option.selected) {
                result.push(option.value || option.text);
            }
        }
        return result;
    }

    window.setToNewRandomFromList = function setToNewRandomFromList(id, list) {
        var element = document.getElementById(id);
        var currentValue = element.innerText;
        var newValue = pickRandomFromList(
            list.filter(function(e) {
                return e !== currentValue;
            })
        );
        element.innerText = newValue;

        var classElements = document.querySelectorAll("." + id);
        classElements.forEach(function (classElement) {
            classElement.innerText = newValue;
        });
    };

    window.setIdInnerText = function setIdInnerText(id, innerText) {
        var element = document.getElementById(id);
        element.innerText = innerText;
    };
}());