import ResumeFile from '../../assets/Blessing_O_mx.pdf';

export default function Resume(){
    return (
        <div>
          <h1>Resume</h1>
          <p><a href={ResumeFile} target="_blank">Resume</a></p>
        </div>
      );
}