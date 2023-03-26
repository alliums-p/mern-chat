import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
          alt=""
        />
        <p className="messageText">This is my message to you.</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
