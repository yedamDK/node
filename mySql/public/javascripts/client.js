const url = "/customers";
selectAll(); //전체조회
insert(); //등록버튼에 이벤트 지정
customerDelete();

//전체조회
function selectAll() {
  fetch(url) //서버에 요청
    .then((res) => res.json()) //응답이 오면 핸들러 실행
    .then((res) => {
      //list 클리어
      list.innerHTML = "";
      for (i = 0; i < res.length; i++) {
        const tr = `<tr data-id="${res[i].id}">
            <td><input type="checkbox" /></td>
            <td>${res[i].id}</td> 
            <td>${res[i].name}</td>
            <td>${res[i].email}</td>
            <td>${res[i].phone}</td>
            <td>${res[i].address}</td>
            <td><button id="delbtn">삭제</button>
            <button id="selbtn">조회</button></td>
          </tr>`;
        list.innerHTML += tr;
      } //<td>${res[i].id}</td>에서 id인 이유는 SQL에서 처음 만들때 id로 정했기 때문
    });
}

//등록
function insert() {
  addbtn.addEventListener("click", function () {
    let data = {
      name: username.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
    };
    fetch(url, {
      method: "post",
      headers: {
        "content-type": "application/json", //넘길데이터 형식을 콘텐트타입에 넣음
      },
      body: JSON.stringify(data), // body는 보낼 데이터(제이슨을 스트링으로 변경)
    })
      .then((res) => res.json()) //받아온 데이터를 스트링을 다시 제이슨으로 변경(서버간은 스트링으로 주고받아야 해서)
      .then((res) => {
        selectAll();
      });
  });
}

//단건 조회 삭제
function customerDelete() {
  list.addEventListener("click", function (ev) {
    //단건 조회
    if (ev.target.id == "selbtn") {
      let id = ev.target.closest("tr").getAttribute("data-id");
      fetch(`${url}/${id}`)
        .then((res) => res.json())
        .then((res) => {
          userid.value = res.id;
          username.value = res.name;
          email.value = res.email;
          phone.value = res.phone;
          address.value = res.address;
        });
      //삭제
    } else if (ev.target.id == "delbtn") {
      let id = ev.target.closest("tr").getAttribute("data-id");
      fetch(`${url}/${id}`, { method: "delete" }).then(() => {
        selectAll();
      });
    }
  });
}

//단건조회
