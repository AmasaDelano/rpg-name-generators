(function () {

    // Pick a random number of items from a list.
    window.pickRandomFromList = function pickRandomFromList(list, number) {
        var randomizedList = _.shuffle(list);
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
}());