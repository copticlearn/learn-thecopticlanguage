import React from 'react';

function OneOne() {
  return (
    <div id="main">
        <div className="top">
            <div className="title">Lesson 1: Introduction</div>
            <div className="sub">
            <div className="time">🕙 3 min</div>
            <div className="difficulty">1</div>
            </div>
        </div>
        <div className="mbody">
            <div id="images"></div>
            <div className="bodyText">
            Welcome to the Coptic Language Cirriculum! A few things before we
            start: Firstly, text highlighted in <vocab>Blue</vocab> is a vocab
            word. Many of these will appear in quizzes after the lesson, so keep
            an eye out for them while you are reading! Secondly, there are words
            highlighted in <coptic id="grey">grei</coptic>. These are Coptic
            words, and you can hear their pronunciation if you click on them.
            Lastly, there are source embeds that show sections of the Liturgical
            services for reference. Here's an example:{' '}
            </div>
            <div className="copticView">
            <div className="cvHeader">Introduction to the Midnight Praises</div>
            <div className="cvContent">
                <div className="english">
                Arise, O you children of the light: let us praise the Lord of
                hosts
                </div>

                <div className="coptic">
                Teny/nou e~p~swi nis/ri n~te piouwini n~tenhwc e~Po#c# n~te
                nijom.
                </div>
            </div>
            </div>
            <div className="bodyText">
            Ok, now for the first lesson. As an Egyptian language, we can see
            how this language has evolved from its much older counterparts,
            including Hieroglyphics, from Ancient Egypt. The Coptic script took
            many letters from the Greek alphabet as well, using only 6 of the
            original <vocab>Demotic</vocab>, or ancient Egyptian letters, to
            supplement the phonetics (sounds) missing in the Greek language. As
            Coptic grew in different parts of Egypt, it also formed various{' '}
            <vocab>dialects</vocab>, or regional variants, of the Coptic
            language. The dialect of Coptic that is used in the Coptic Orthodox
            Church is called <vocab>Bohairic</vocab>, although other common
            dialects include <vocab>Sahidic</vocab> and <vocab>Fayyumic</vocab>{' '}
            (click{' '}
            <a
                href="https://apps.lib.umich.edu/online-exhibits/exhibits/show/coptic-manuscripts/coptic-dialects"
                target="_blank"
            >
                here
            </a>{' '}
            to learn more about dialects). The Coptic Orthodox Church is one of
            the main places where the Coptic language has been preserved, and is
            the primary scope of this course. May God bless your learning and I
            hope you enjoy the course! <br />
            </div>
            <div className="bottom">
            <a href="../quizzes/1-1.html">
                <button className="bQuiz">Start Quiz</button>
            </a>
            </div>
        </div>
    </div>
  );
}

export default OneOne;
