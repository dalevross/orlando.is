var people = [{
        name: 'Dale V. Ross',
        id: '314',
        chosenname: 'Pi',
        art: [{ type: 'link', value: 'http://tinyurl.com/tldr-pi' }, { type: 'link', value: 'http://resume.dalevross.com' }]

    },
    {
        name: 'Garshuah Reeves',
        id: '2peace',
        chosenname: '2 Peace',
        art: [{ type: 'link', value: 'https://soundcloud.com/squeeze-2peace/right-life-god-life' }, { type: 'link', value: 'https://soundcloud.com/squeeze-2peace/fly-in-the-air-if-u-got-2' }]

    },
    {
        name: 'George C. Meyers',
        id: 'george',
        chosenname: 'George',
        art: [{ type: 'image', value: 'https://scontent.ftpa1-2.fna.fbcdn.net/v/t31.0-8/14991146_10157820299320374_4412630560657900217_o.jpg?oh=4215f7b4d14545e6496ab089764367c1&oe=5932AD76' }, { type: 'image', value: 'https://scontent.ftpa1-2.fna.fbcdn.net/v/t31.0-8/15250741_10157910426045374_886165682930995388_o.jpg?oh=313be6495fc3d91b376c5985527a3bf9&oe=592B0224' }]

    }
];

$('document').ready(function() {

    $.each(people, function(index, person) {
        $('div#people').append("<div id='" + person.id + "'><span>Name: " + person.name + "</span><br/><span>Chosen Name: " + person.name + "</span><ul id=s" + person.id + "></ul></div>");
        $.each(person.art, function(index2, art) {
            if (art.type === "link")
                $('ul#s' + person.id).append("<li><a src='" + art.value + "'></a></li>");
            else if (art.type === "image")
                $('ul#s' + person.id).append("<li><img src='" + art.value + "'></img></li>");
        });
    });
});