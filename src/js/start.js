function start(){
        // $(".icon1").draggable({containment:".ion__box", scroll: false});
        // $(".icon2").draggable();
        // $(".icon3").draggable();
        // $(".icon4").draggable();
        // $( "#draggable3" ).draggable({ containment: "#containment-wrapper", scroll: false });

        $(".icon1").draggable({
            containment:".icon__box", scroll: false,
            start: function() {
                
                $(".cursor img").attr("src", "images/game_mouse01.png");
                // $("header").removeClass().addClass("red");
                $("header").css("background-color","rgba(233, 65, 65, 0.582)");
                $("header").css("transition","all 0.3s");
                $("#footer .info").html("현재 빨강 음악 듣기를 클릭 하셨습니다.");
            },
            stop: function() {
                setTimeout(function() {
                    printAgent();
                }, 7000); // 7초 후에 실행
            }
        });
        $(".icon2").draggable({
            containment:".icon__box", scroll: false,
            start: function() {
                $(".cursor img").attr("src", "images/game_mouse02.png");
                // $("header").removeClass().addClass("blue");
                $("header").css("background-color","rgba(54, 57, 231, 0.582)");
                $("header").css("transition","all 0.3s");
                $("#footer .info").html("현재 파랑 음악 듣기를 클릭 하셨습니다.");
            },
            stop: function() {
                setTimeout(function() {
                    printAgent();
                }, 7000); // 7초 후에 실행
            }
        });
        $(".icon3").draggable({
            containment:".icon__box", scroll: false,
            start: function() {
                $(".cursor img").attr("src", "images/game_mouse03.png");
                // $("header").removeClass().addClass("green");
                $("header").css("background-color","rgba(88, 240, 28, 0.582)");
                $("header").css("transition","all 0.3s");
                $("#footer .info").text("현재 초록 음악 듣기를 클릭 하셨습니다.");
            },
            stop: function() {
                setTimeout(function() {
                    printAgent();
                }, 7000); // 7초 후에 실행
            }
        });
        $(".icon4").draggable({
            containment:".icon__box", scroll: false,
            start: function() {
                $(".cursor img").attr("src", "images/game_mouse04.png");
                // $("header").removeClass().addClass("yellow");
                $("header").css("background-color","rgba(237, 240, 63, 0.582)");
                $("header").css("transition","all 0.3s");
                $("#footer .info").text("현재 노랑 음악 듣기를 클릭 하셨습니다.");
            },
            stop: function() {
                setTimeout(function() {
                    printAgent();
                }, 7000); // 7초 후에 실행
            }
        });

        $(".music__wrap").draggable({
             scroll: false,
        });
        window.onload = function(){
            window.addEventListener("mousemove", e => {
                gsap.to(".cursor", {
                    duration: 0,
                    left: e.pageX -5,
                    top: e.pageY -10
                });
            });
        }

        //현재 사용중인  OS와 화면크기
        const printAgent = () => {
            let os = navigator.userAgent.toLowerCase();
            let osWdith = window.screen.width
            let osHeight = window.screen.height

            if(os.indexOf("macintosh") > -1){
	            document.querySelector("#footer .info").innerHTML = "현재 맥을 사용중 이며, 화면 크기는 "+osWdith+" X "+osHeight+" 입니다."
            } else if(os.indexOf("windows") > -1){
                document.querySelector("#footer .info").innerHTML = "현재 윈도우를 사용중 이며, 화면 크기는 "+osWdith+" X "+osHeight+" 입니다."
            } else if(os.indexOf("iphone") > -1){
                document.querySelector("#footer .info").innerHTML = "현재 아이폰을 사용중 이며, 화면 크기는 "+osWdith+" X "+osHeight+" 입니다."
            } else if(os.indexOf("android") > -1){
                document.querySelector("#footer .info").innerHTML = "현재 안드로이드폰을 사용중 이며, 화면 크기는 "+osWdith+" X "+osHeight+" 입니다."
            }            
        }
        printAgent();

        // function printTime(){
        //     const time = document.querySelector(".time");
        //     const now = new Date();

        //     time.innerHTML = now.getFullYear() + "년 " +
        //     (now.getMonth()+1) + "월 " +
        //     now.getDate() + "일 " +
        //     now.getHours() + "시 " +
        //     now.getMinutes() + "분 "
        //     setTimeout("printTime()", 1000);
        // };
    

        // 현재 시간
        const printTime = () => {
            const now = new Date();
            const options = {
                year: 'numeric',
                month: 'long',   //month 옵션에서는 'numeric'이 아닌 'long' 값을 사용하면 해당 월을 한글로 표현할 수 있다.
                day: '2-digit',  //long,2-digit로 바꾸면 한글이 나온다.
                hour: 'numeric',
                minute: 'numeric',
               // second: 'numeric',
                hour12: false, // 24시간제로 표시
            };
            const dateTimeString = now.toLocaleString('ko-KR', options);
            document.querySelector(".time").innerHTML = dateTimeString
        };
        printTime();
        setInterval(printTime, 1000);

}
export default start;