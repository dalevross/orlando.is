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
        art: [{ type: 'image', value: 'https://scontent.ftpa1-2.fna.fbcdn.net/v/t31.0-8/14991146_10157820299320374_4412630560657900217_o.jpg?oh=4215f7b4d14545e6496ab089764367c1&oe=5932AD76' }, { type: 'image', value: 'https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-0/s261x260/15327426_10157910426045374_886165682930995388_n.jpg?oh=b1795af486e27941ff4f2038a3d06e69&oe=596BD971' }]

    }
];

$('document').ready(function() {

    $.each(people, function(index, person) {
        $('div#people').append("<div id='" + person.id + "'><span>Name: " + person.name + "</span><br/><span>Chosen Name: " + person.name + "</span><ul id=s" + person.id + "></ul></div>");
        $.each(person.art, function(index2, art) {
            if (art.type === "link")
                $('ul#s' + person.id).append("<li><a href='" + art.value + "'></a></li>");
            else if (art.type === "image")
                $('ul#s' + person.id).append("<li><img src='" + art.value + " width='100px'></img></li>");
        });
    });
});