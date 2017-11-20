var watson = require('watson-developer-cloud');
var fs = require('fs');
var visual_recognition = watson.visual_recognition({
    api_key: 'XXXXXXXXXXX',
    version: 'v3',
    version_date: '2016-05-20'
});

var params = {
    threshold :0,
    classifier_ids: ['IBM_615151289'],
    images_file: fs.createReadStream('./resources/test.jpg')
};
visual_recognition.classify(params,
    function (err, response) {
        if (err)
            console.log(err);
        else
            console.log(JSON.stringify(response, null, 2));
    });
    