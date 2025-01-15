$(document).ready(function(){
    // 偵測視窗滾動事件
    $(window).scroll(function(){
        // 存取距離上方的值
        let scrolledPx = $(this).scrollTop();
        var screenWidth = $(window).width(); // 獲取螢幕寬度

        // nav導覽列標題變化-------------------------

        if(screenWidth <900){
            if( scrolledPx < 350){
                $('#nav1').addClass('active');
                $('#nav2').removeClass('active');
                $('#nav3').removeClass('active');
                $('#nav4').removeClass('active');
                
            }else if( scrolledPx >350 && scrolledPx< 1200){
                $('#nav2').addClass('active');
                $('#nav1').removeClass('active');
                $('#nav3').removeClass('active');
                $('#nav4').removeClass('active');
            }else if( scrolledPx >1200 && scrolledPx< 3200){
                $('#nav3').addClass('active');
                $('#nav1').removeClass('active');
                $('#nav2').removeClass('active');
                $('#nav4').removeClass('active');
    
            }else{
                $('#nav4').addClass('active');
                $('#nav1').removeClass('active');
                $('#nav2').removeClass('active');
                $('#nav3').removeClass('active');
    
            }
        }else{

            if( scrolledPx < 550){
                $('#nav1').addClass('active');
                $('#nav2').removeClass('active');
                $('#nav3').removeClass('active');
                $('#nav4').removeClass('active');
                
            }else if( scrolledPx >550 && scrolledPx< 1750){
                $('#nav2').addClass('active');
                $('#nav1').removeClass('active');
                $('#nav3').removeClass('active');
                $('#nav4').removeClass('active');
            }else if( scrolledPx >1750 && scrolledPx< 4000){
                $('#nav3').addClass('active');
                $('#nav1').removeClass('active');
                $('#nav2').removeClass('active');
                $('#nav4').removeClass('active');
    
            }else{
                $('#nav4').addClass('active');
                $('#nav1').removeClass('active');
                $('#nav2').removeClass('active');
                $('#nav3').removeClass('active');
    
            }
        }

        // works作品區-便當盒切入--------------------
        // if(screenWidth >=768 ){
        //     if (scrolledPx >= 1700 && scrolledPx < 2300) {
        //         $('#works .card').eq(0).css('right', '0');
        //     } else if (scrolledPx >= 2300 && scrolledPx < 2800) {
        //         $('#works .card').eq(1).css('right', '0');
        //     } else if (scrolledPx >= 2800 && scrolledPx < 3300) {
        //         $('#works .card').eq(2).css('right', '0');
        //     } else if (scrolledPx >= 3300 && scrolledPx < 3700) {
        //         $('#works .card').eq(3).css('right', '0');
        //     } else {
        //         $('#works .card').eq(3).css('right', '0');
        //     }
        // }


         // skill區陰影動畫-------------------------
        const box = document.querySelector('.paper');
        const shadowIntensity = 20; // 陰影最大偏移量


        let lastMove = 0;
        document.addEventListener('mousemove', (event) => {
            const now = Date.now();
            if (now - lastMove < 16) return; // 限制到 60 FPS
            lastMove = now;
        
            // 獲取游標位置
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // // 針對每個 .paper 元素計算陰影效果
            // boxes.forEach((box) => {
                
            // 獲取元素的中心位置
            const boxRect = box.getBoundingClientRect();
            const boxCenterX = boxRect.left + boxRect.width / 2;
            const boxCenterY = boxRect.top + boxRect.height / 2;

            // 計算偏移量（相對於元素中心位置）
            const offsetX = ((mouseX - boxCenterX) / boxRect.width) * shadowIntensity;
            const offsetY = ((mouseY - boxCenterY) / boxRect.height) * shadowIntensity;

            // 動態更新陰影樣式
            box.style.boxShadow = `
                ${offsetX}px ${offsetY}px 20px rgba(0, 0, 0, 0.3)
            `;
        });

    });
        
})
