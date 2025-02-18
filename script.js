console.log("JavaScriptファイルが読み込まれました！");

// ここにハンバーガーメニューやスクロールアニメーションのコードを追加

    <script>
    window.addEventListener("scroll", function() {
        let elements = document.querySelectorAll(".fade-in");
        elements.forEach((el) => {
            let rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    });
</script>
