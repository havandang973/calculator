// kiến thức cũ: học lại listenEvent, DOM event
// kiến thức mới: eval(): tính toán, Array.from(): chuyển list thành mảng

var btn = document.querySelectorAll('button')
var showValue = document.querySelector('.show')

var arrayBtn = Array.from(btn)

for(let i = 0; i < arrayBtn.length; i++) {
    arrayBtn[i].addEventListener("click", function(e) {
        // console.log(typeof +e.target.value)
        switch(e.target.value) {
            //xóa hết
            case 'C':
                showValue.innerText = ''
                break
            // cắt chuỗi
            case 'X':
                showValue.innerText = showValue.innerText.slice(0, -1)
                break
            case '+': checkData ('+', '++'); break
            case '-': checkData ('-', '--'); break
            case '*': checkData ('*', '**', '+*', '-*', '/*'); break
            case '/': checkData ('/', '//', '+/', '-/', '*/'); break;
            case '=':
                showValue.innerText = eval(showValue.innerText)
                break
            default:
                showValue.innerText += e.target.value
        }
    })
}

function checkData (valueTrue, valueFalse, valueFalse2, valueFalse3, valueFalse4) {
    showValue.innerText += valueTrue
        if(showValue.innerText.includes(valueFalse) || showValue.innerText.includes(valueFalse2) || showValue.innerText.includes(valueFalse3) || showValue.innerText.includes(valueFalse4)) {
            alert('Nhập dữ liệu không đúng!')
            showValue.innerText = showValue.innerText.slice(0, -1)
        }
}





