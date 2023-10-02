import { useEffect } from "react";
import {
  useCommentDispatch,
  useCommentState,
} from "../../context/comment/context";
import { fetchComment } from "../../context/comment/actions";
import { useParams } from "react-router-dom";
import { useUsersState } from "../../context/members/context";

export const Comment: React.FC = () => {
  const commentState = useCommentState();
  const { comments } = commentState;
  console.log(comments);

  const commentDispatch = useCommentDispatch();

  const memberState = useUsersState();

  const { projectID, taskID } = useParams();

  useEffect(() => {
    fetchComment(commentDispatch, projectID!, taskID!);
  }, [commentDispatch, projectID, taskID]);

  const getDate = (date: Date): string => {
    const newDate = new Date(date);
    return `${newDate.toLocaleDateString("en-In")} ${newDate.toLocaleTimeString(
      "en-In",
    )}`;
  };

  const getuser = (owner: number) => {
    const user = memberState?.users.filter((member) => member.id === owner)[0];
    return user?.name;
  };
  return (
    <>
      {Array.isArray(comments) &&
        comments.map((comment) => {
          return (
            <div key={comment.id} className="comment flex mb-2">
              <p className=" mr-3">{comment.description}</p>
              <p className=" mr-3">{getDate(comment.createdAt)}</p>
              <p className=" mr-3">{getuser(comment.owner)}</p>
            </div>
          );
        })}
    </>
  );
};
