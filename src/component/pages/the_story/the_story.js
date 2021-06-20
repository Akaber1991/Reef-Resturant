import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import Title from '../../general/title/title.js'
import './the_story.css';

class StoryPage extends React.Component{
  constructor() {
    super();
    this.state = { data: [] };
  }
    componentDidMount() {
      fetch(`/story`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }

  render(){
    if(this.state.data.length == 0)
        return (<p>ops</p>)

    return(
    <div>
      <Header data = {this.state.data.Header}/>
      <div>
       <Title title="הסיפור שלנו.." />
       <img className="img-all col-10 mx-auto d-block"src={"../../../images/all.jpg"} alt="" />
       <p className="pStory container col-11"> למעלה בפסגת הר הכרמל שוכן הכפר שלנו עספיא, בכפר בו המשפחה השתרשה שנים ועסקה בעיבוד אדמה והתפרנסה מחקלאות.. אך לא רק.. החקלאות היוותה עבורנו מרכיב עיקרי בתבשילים מקומיים מסורתיים.. השפית לינה אבו זלף אמא חד הורית ל 3 ילדים ועתירת ניסיון קולינרי לקחה את העסק החקלאי והגידול הכפרי של משפחתה צעד אחד קדימה.. החליטה לשלב את הכפריות ומיטב המאכלים האותנטיים הדרוזים עם הקולינריה המודרנית.. סוג של מפגש בין הישן לחדש, בין המסורת לחדשנות, בין הכפריות המקומית למודרניות המתקדמת בכך הוקמה מסעדת רייף שהיא מפגש קולינרי ייחודי שלא תמצאו בשום מקום.</p>
      </div>
      <Footer data = {this.state.data.Footer}/>
    </div>
  )}
}
export default StoryPage;
