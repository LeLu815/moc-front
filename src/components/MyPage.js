import React from 'react';
import classes from './MyPage.module.css'; 


function MyPage() {
  return (
    <div className={classes.container}>
      <header className={classes.topNav}>
        {/* You can replace these with your actual navigation links */}
        <a href="#home">마이페이지</a>
        <a href="#info">개인정보</a>
      </header>
      
      <div className={classes.content}>
        <aside className={classes.sidebar}>
          {/* Replace with your actual logo and menu options */}
          <div className={classes.logo}>Your Logo</div>
          <nav className={classes.menu}>
            <a href="#profile">마이페이지</a>
            <a href="#info">개인정보</a>
            <a href="#reaction">반응</a>
            <a href="#like">좋아요</a>
            <a href="#reply">댓글</a>
            <a href="myactivity">내 활동</a>
            <a href="myreply">내가 쓴 댓글</a>
          </nav>
        </aside>
        
        <main className={classes.mainContent}>
          <div className={classes.inputgroup}>
            <label>이름</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className={classes.inputgroup}>
            <label>닉네임</label>
            <input type="text" placeholder="Nickname" />
          </div>
          <div className={classes.inputgroup}>
            <label>생년월일</label>
            <input type="text" placeholder="Birthday" />
          </div>
          {/* Add more input fields as needed */}
        </main>
      </div>
      
      <footer className="footer">© 2024 MoC. All Rights Reserved</footer>
    </div>
  );
}

export default MyPage;
