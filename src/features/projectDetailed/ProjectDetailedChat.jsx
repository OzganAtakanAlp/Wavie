import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comment, Header, Segment } from "semantic-ui-react";
import {
  firebaseObjectToArray,
  getProjectChatRef,
} from "../../app/firestore/firebaseService";
import ProjectDetailedChatForm from "./ProjectDetailedChatForm";
import { listenToProjectChat } from "../projectActions";
import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";
import { CLEAR_COMMENTS } from "../projectConstants";
import { createDataTree } from "../../app/common/util/util";

export default function ProjectDetailedChat({ projectId }) {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.project);
  const [showReplyForm, setShowReplyForm] = useState({
    open: false,
    commentId: null,
  });

  function handleCloseReplyForm() {
    setShowReplyForm({ open: false, commentId: null });
  }
  useEffect(() => {
    getProjectChatRef(projectId).on("value", (snapshot) => {
      if (!snapshot.exists()) return;
      dispatch(
        listenToProjectChat(firebaseObjectToArray(snapshot.val()).reverse())
      );
    });
    return () => {
      dispatch({ type: CLEAR_COMMENTS });
      getProjectChatRef().off();
    };
  }, [projectId, dispatch]);

  return (
    <>
      <Segment
        textAlign='center'
        attached='top'
        inverted
        color='teal'
        style={{ border: "none" }}
      >
        <Header>Chat about this event</Header>
      </Segment>

      <Segment attached>
        <ProjectDetailedChatForm
          projectId={projectId}
          parentId={0}
          closeForm={setShowReplyForm}
        />
        <Comment.Group>
          {createDataTree(comments).map((comment) => (
            <Comment key={comment.id}>
              <Comment.Avatar src='/assets/user.png' />
              <Comment.Content>
                <Comment.Author as={Link} to={`/profile/${comment.uid}`}>
                  {comment.displayName}
                </Comment.Author>
                <Comment.Metadata>
                  <div>{formatDistance(comment.date, new Date())}</div>
                </Comment.Metadata>
                <Comment.Text>
                  {comment.text.split("\n").map((text, i) => (
                    <span key={i}>
                      {text}
                      <br />
                    </span>
                  ))}
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action
                    onClick={() =>
                      setShowReplyForm({ open: true, commentId: comment.id })
                    }
                  >
                    Reply
                  </Comment.Action>
                  {showReplyForm.open &&
                    showReplyForm.commentId === comment.id && (
                      <ProjectDetailedChatForm
                        projectId={projectId}
                        parentId={comment.id}
                        closeForm={handleCloseReplyForm}
                      />
                    )}
                </Comment.Actions>
              </Comment.Content>

              {comment.childNodes.length > 0 && (
                <Comment.Group>
                  {comment.childNodes.reverse().map((child) => (
                    <Comment key={child.id}>
                      <Comment.Avatar src='/assets/user.png' />
                      <Comment.Content>
                        <Comment.Author as={Link} to={`/profile/${child.uid}`}>
                          {child.displayName}
                        </Comment.Author>
                        <Comment.Metadata>
                          <div>{formatDistance(child.date, new Date())}</div>
                        </Comment.Metadata>
                        <Comment.Text>
                          {child.text.split("\n").map((text, i) => (
                            <span key={i}>
                              {text}
                              <br />
                            </span>
                          ))}
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action
                            onClick={() =>
                              setShowReplyForm({
                                open: true,
                                commentId: child.id,
                              })
                            }
                          >
                            Reply
                          </Comment.Action>
                          {showReplyForm.open &&
                            showReplyForm.commentId === child.id && (
                              <ProjectDetailedChatForm
                                projectId={projectId}
                                parentId={child.parentId}
                                closeForm={handleCloseReplyForm}
                              />
                            )}
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  ))}
                </Comment.Group>
              )}
            </Comment>
          ))}
        </Comment.Group>
      </Segment>
    </>
  );
}
