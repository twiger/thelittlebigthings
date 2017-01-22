var app = angular.module('career_app', []);
    app.controller('career_ctrl', function($scope, $http) {

        $.ajaxSetup({
            cache: false
        });

        $(window).resize(function() {
            ResponsiveWeb();
        });

        /* Laoding Animation */
        $(window).load(function() {
            // Animate loader off screen
            setTimeout(
                function() {
                    //do something specials
                    $(".se-pre-con").fadeOut("slow");
                }, 500);
        });

        $('#homepage_body').css("display", 'none');

        $("#master").load("master.html", function(responseTxt, statusTxt, xhr) {

            detectBrowser();
            ResponsiveWeb();
            $('#homepage_body').fadeIn(1000);
            $(".career.item").addClass('active');

        });

        $('.ui.sticky')
            .sticky({
                context: '#career_catagory'
            });

        $('.ui.accordion')
            .accordion();

        $scope.catagories = [{
            "school_name": "基礎科學",
            "deparments": [{
                "department_name": "數理化學群"
            }, {
                "department_name": "地球與環境學群"
            }]
        }, {
            "school_name": "工程",
            "deparments": [{
                "department_name": "工程學群"
            }, {
                "department_name": "資訊學群"
            }]
        }, {
            "school_name": "建築設計與藝術",
            "deparments": [{
                "department_name": "建築與設計學群"
            }, {
                "department_name": "藝術學群"
            }]
        }, {
            "school_name": "生命科學",
            "deparments": [{
                "department_name": "生命科學學群"
            }, {
                "department_name": "生物資源學群"
            }, {
                "department_name": "醫藥衛生學群"
            }]
        }, {
            "school_name": "社會科學",
            "deparments": [{
                "department_name": "法律與政治學群"
            }, {
                "department_name": "社會與心理學群"
            }, {
                "department_name": "資訊與傳播學群"
            }]
        }, {
            "school_name": "運動與休閒",
            "deparments": [{
                "department_name": "觀光"
            }, {
                "department_name": "餐飲"
            }, {
                "department_name": "體育"
            }]
        }, {
            "school_name": "人文與教育",
            "deparments": [{
                "department_name": "外語學群"
            }, {
                "department_name": "教育學群"
            }, {
                "department_name": "文史哲學群"
            }]
        }, {
            "school_name": "商業與管理",
            "deparments": [{
                "department_name": "商業與管理學群"
            }, {
                "department_name": "財經學群"
            }]
        }, {
            "school_name": "不分系學群",
            "deparments": [{
                "department_name": "不分系學群"
            }]
        }];


    });