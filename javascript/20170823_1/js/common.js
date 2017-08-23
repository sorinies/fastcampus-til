(function() {
  const bookListBody = document.getElementById('bookListBody');
  const btnGroup = document.getElementById('btnGroup');
  const addBtn = document.getElementById('add');
  let addBtnFlag = false;
  let cid = bookList.length + 1;
  let html = ``;

  function drawContents() {
    html = ``;
    bookListBody.innerHTML = html;
    bookList.map((x, i) => {
      html += `
                <tr>
                  <th>
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox" id="${bookList[i].id}">
                    </label>
                  </th>
                  <th scope="row">${bookList[i].id}</th>
                  <td>${bookList[i].title}</td>
                  <td>${bookList[i].author}</td>
                  <td>${bookList[i].price}</td>
                </tr>
      `;
    }); 
    bookListBody.innerHTML = html;
    /*
    for (let i = numOfBook; i < cid ; i++) {
      bookListBody.insertAdjacentHTML('beforeend', `
                <tr>
                  <th>
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox" id="${bookList[i].id}">
                    </label>
                  </th>
                  <th scope="row">${bookList[i].id}</th>
                  <td>${bookList[i].title}</td>
                  <td>${bookList[i].author}</td>
                  <td>${bookList[i].price}</td>
                </tr>
      `);
    }
    */
    
  }

  function createCancelForm() {
    document.getElementsByClassName('add-form')[0].classList.add('active');
    btnGroup.insertAdjacentHTML('beforeend', `<button type="button" class="btn btn-warning" id="cancel">Cancel</button>`);
    addBtn.removeEventListener('click', createCancelForm);
    addBtnFlag = true;
    if (addBtnFlag == true) {
      // 7. Cancel 버튼이 클릭되면 .add-form과 Cancel 버튼 비표시
      const cancelBtn = document.getElementById('cancel');
      cancelBtn.addEventListener('click', removeCancelForm);
      addBtn.addEventListener('click', addBook);
    }
  }
  function addBook() {
    if (document.getElementById('formTitle').value == 0) {

    }
    else if (document.getElementById('formTitle').value != 0) {
      let newContents = {
        id: cid,
        title: document.getElementById("formTitle").value,
        author: document.getElementById("formAuthor").value, 
        price: document.getElementById("formPrice").value
      }
      bookList.push(newContents);
      // e.preventDefault();
      // e.stopPropagation();
      drawContents(bookList.length);
      cid = bookList.length + 1;
    }
  }
  function removeCancelForm(x) {
    document.getElementById('btnGroup').removeChild(x.target);
    document.getElementsByClassName('add-form')[0].classList.remove('active');
    addBtnFlag = false;
    if (addBtnFlag == false) {
      addBtn.addEventListener('click', createCancelForm);
      addBtn.removeEventListener('click', addBook);
    }
  }

  drawContents();
  const checkState = document.querySelectorAll('#myTable .form-check-input');

  // 1. Delete Book 버튼이 클릭되면 체크된 book 리스트를 삭제

  // 2. 최상위 체크박스를 클릭하면 전체 체크박스 토글(on/off)
  document.getElementById('checkAll').addEventListener('change', (e) => {
    for (let item of checkState) {
      item.checked == false ? item.checked = true : item.checked = false;
    }
  })

  // 3. Add Book 버튼이 클릭되면 .add-form를 표시
  // 4. Add Book 버튼이 클릭되면 Cancel 버튼 표시
  addBtn.addEventListener('click', createCancelForm);

  // 5. .add-form이 표시된 상태에서 필수입력 대상인 Title이 입력되었으면 Add Book 버튼이 클릭 시, bookList 객체에 .add-form의 입력값을 추가하고 DOM 갱신
  // 6. .add-form이 표시된 상태에서 필수입력 대상인 Title이 입력되지 않았으면 alert으로 입력되지 않았음을 경고

  // (*) 모든 선언문의 전역 선언 금지

}())