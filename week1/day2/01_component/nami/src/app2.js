function Page(){
  return(
    <div>
      <h1>Hello World!!!</h1>
    </div>
  )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Page />
    <Page />
    <Page />
  </>
  //↑をdivにしても表示はできるけど、下のPageたちがさらに別のdivの中に入って
  //美しく無い。<></>を使うことでid=root直下にPageたちを格納することができる！
  //ちなみに<>がないと複数要素は表示ができなくてエラーになるよ
  //例外として、semantic htmlと呼ばれる要素をつくるときは<>じゃなくてきちんと書いた方がいい。
  //semantic html: header main setion container aside footer
);