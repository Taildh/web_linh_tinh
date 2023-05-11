$(document).ready(function () {
    
    function getData () {
        $.ajax({
            url: "data.json",
            method: "GET",
            dataType: "json",
            success: function (response) {
                response.forEach(function (item) {
                    let id = item.id;
                    $(".list").html("");
                    $(".list").append(`
                        <li class="item" data-id="${item.id}">
                        <div class="ava">
                            <img src="${item.image}">
                        </div>
                        <div class="content">
                            <div class="info">
                                <span>${item.age} Tuổi</span>
                                <span>${item.height}</span>
                                <span>${item.job}</span>
                                <span class="area"><em></em> ${item.location}</span>
                            </div>
                            <div class="taga">
                               
                            </div>
    
                            <div class="call">Xin số điện thoại</div>
                        </div>
                    </li>
                    `
                    )
                    item.hobbies.forEach(function (hobbie) {
                        console.log(id);
                        $('.list').find('.item[data-id="' + id + '"]').find(".taga").append(
                            `<span>${hobbie}</span>`
                        );
                    }) 
                });
            }
        })
    }


    $("#search").click(function () {
        getData();
    })

    getData();
})