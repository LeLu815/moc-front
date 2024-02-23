import React from 'react';
import classes from './MainPage.module.css';
import SearchBar from './SearchBar';
import NewsItem from './News';
import Footer from './Footer';

const MainPage = () => {
    const popularPosts = ["인기 게시글 1", "인기 게시글 2", "인기 게시글 3"];
    const interestedPosts = ["관심 게시글 1", "관심 게시글 2", "관심 게시글 3"];
    const recentPosts = ["최신 게시글 1", "최신 게시글 2", "최신 게시글 3"];
    const hashtags = ["#해시태그1 게시판", "#해시태그2 게시판", "#해시태그3 게시판","#해시태그4 게시판"];

    return (
        <div className={classes.mainPage}>
            <h1>오늘 아껴볼 시간은?</h1>
            <SearchBar />
            {/* Content wrapper added to ensure content pushes footer down */}
            <div className={classes.contentWrapper}>
                <div className={classes.sectionsContainer}>
                    <div className={classes.section}>
                        <h2>인기글</h2>
                        {popularPosts.map((post, index) => (
                            <NewsItem key={index} title={post} />
                        ))}
                    </div>
                    <div className={classes.section}>
                        <h2>관심글</h2>
                        {interestedPosts.map((post, index) => (
                            <NewsItem key={index} title={post} />
                        ))}
                    </div>
                    <div className={classes.section}>
                        <h2>최신글</h2>
                        {recentPosts.map((post, index) => (
                            <NewsItem key={index} title={post} />
                        ))}
                    </div>
                    <div className={classes.section}>
                        <h2>해시태그 둘러보기</h2>
                        <ul>
                            {hashtags.map((post,index) => (
                                <NewsItem key={index} title={post} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;
