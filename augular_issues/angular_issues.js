angular.module('augular_issues', [])
.controller('Issues', function($scope, $http) {
    $http.get('https://api.github.com/repos/angular/angular/issues').
        then(function(response) {
            var raw_issues = response.data;
            var numIssues = raw_issues.length;
            
        /*
            var digest = {
                "title" : "",
                "body"  : "",
                "user_login" : "",
                "assignee_login": ""
            };
          */
        
            $scope.digests = [];
            
            for(var i=0; i<numIssues; i++) {
                var digest = {
                    "title" : "",
                    "body"  : "",
                    "user_login" : "",
                    "assignee_login": ""
                };
                 
                digest["title"] = raw_issues[i]["title"];
                digest["body"] = raw_issues[i]["body"];
                digest["user_login"] = raw_issues[i]["user"]["login"];
                digest["assignee_login"] = raw_issues[i]["assignee"];
                
                $scope.digests.push(digest);
            }
            
            console.log($scope.digests);
        });
});