var https = require('https');
var fs = require('fs');
var exec = require('child_process').execFile;

function downloadFile(urlString, fileString) {
	var request = https.get(urlString, function(response) {
		if (response.headers.location !== undefined) {
			// redirect
			var request = https.get(response.headers.location, function(response) {
				var file = fs.createWriteStream(fileString);
				response.pipe(file);
			});
		} else {
			response.pipe(file);
		}
	});
}

function downloadText(urlString, fileString) {
	var request = https.get(urlString, function(response) {
		response.setEncoding('utf8');
		if (fileString !== undefined) {
			var file = fs.createWriteStream(fileString);
			response.pipe(file);
		} else {
			response.on('data', function(chunk) {
				console.log(chunk);
			});
		}
	});
}

var gitEXE = 'Git-2.18.0-64-bit.exe';
var gitURL = 'https://github.com/git-for-windows/git/releases/download/v2.18.0.windows.1/' + gitEXE;

downloadFile(gitURL, gitEXE);

function setupGit() {
	return new Promise(function(resolve, reject) {
		exec(gitEXE, [], {}, function(err) {
			if (err) {
				console.log(err);
			}
			resolve();
		});
	});
}

function cloneRepo(repoURL) {
	return new Promise(function(resolve, reject) {
		setupGit().then((result) => {
			exec('git', ['clone', repoURL], {}, function(err) {
				if (err) {
					console.log(err);
				}
				resolve();
			});
		});
	});
}

var repoURL = 'https://github.com/mlavergn/bootstrap.git';

cloneRepo(repoURL).then((result) => {
	console.log('completed');
});
