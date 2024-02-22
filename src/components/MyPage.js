import React from 'react';
import classes from './MyPage.module.css';

function MyPage() {
    return (
      <div className={classes.container}>
        <header className={classes.topNav}>
          <div className={classes.navItem}>
            <a href="#profile">마이페이지</a>
          <span className={classes.navSeparator}> &gt; </span>
          <a href="#info">개인정보</a>
          </div>
        </header>
        
        <div className={classes.content}>
          <div className={classes.formContainer}> 
            <div className={classes.logoCircle}> </div>
            <form className={classes.userInfoForm}>
            <div className={classes.inputFieldsContainer}>
              <div className={classes.inputGroup}>
                <label>이름</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className={classes.inputGroup}>
                <label>닉네임</label>
                <input type="text" placeholder="Nickname" />
              </div>
              <div className={classes.inputGroup}>
                <label>생년월일</label>
                <input type="text" placeholder="Birthday" />
              </div>
            </div>
              <div className={classes.buttonContainer}>
                <button type="submit">수정</button>
                <button type="submit">확인</button>
              </div>
            </form>
          </div>
  
          <aside className={classes.sidebar}>
          <nav className={classes.menu}>
            <div>마이페이지</div> {/* Static text */}
            <a href="#info">개인정보</a> {/* Clickable link */}
            <div>반응</div> {/* Static text */}
            <a href="#like">좋아요</a> {/* Clickable link */}
            <a href="#reply">댓글</a> {/* Clickable link */}
            <div>내 활동</div> {/* Static text */}
            <a href="#myreply">내가 쓴 글</a> {/* Clickable link */}
          </nav>
        </aside>
        </div>
  
        <footer className="footer">© 2024 MoC. All Rights Reserved</footer>
      </div>
    );
  }
  
  export default MyPage;
