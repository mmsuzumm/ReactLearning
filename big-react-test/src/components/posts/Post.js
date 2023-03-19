import './Post.css';
export default function Post(props) {
  const { userId, title, body } = props;
  return (
    <div className="post">
      <big>User ID:</big> <small>{userId}</small>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
