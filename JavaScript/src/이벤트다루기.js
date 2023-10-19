// function clickEvent() {
        //     alert("click");
        // }
        function focusEvent() {
            const inputBox = document.querySelector("#input-box");
            inputBox.style.backgroundColor = "orange";
        }
        function blurEvent() {
            const inputBox = document.querySelector("#input-box");
            inputBox.style.backgroundColor = "green";
        }

        // 프로퍼티 리스너 방식으로 이벤트 등록 (잘안씀)
        const btn = document.querySelector("button");
        btn.onclick = () => alert("화살표 함수");

        // 이벤트 등록 메서드로 이벤트 등록하기 **
        const btnEvent = document.querySelector("btn-event");
        btnEvent.addEventListener("click", function() {
            alert("이벤트 등록 버튼");
        })