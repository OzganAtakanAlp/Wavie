import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";
import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import {
  decrementLikeCount,
  incrementLikeCount,
  incrementShareCount,
} from "../../app/firestore/firestoreService";
import {
  decrementLikes,
  decrementShares,
  incrementLikes,
  incrementShares,
} from "../releaseActions";

export default function ProjectListItem({ release }) {
  const dispatch = useDispatch();
  const [itemLiked, setItemLiked] = useState(false);
  const [itemShared, setItemShared] = useState(false);

  function handleOnLikeClick() {
    if (itemLiked) {
      decrementLikeCount();
      dispatch(decrementLikes(release.like_count));
      setItemLiked(false);
    } else {
      incrementLikeCount(release.id);
      dispatch(incrementLikes(release.like_count));
      setItemLiked(true);
    }
  }
  // function handleOnShareClick() {
  //   incrementShareCount(release.id);
  //   itemShared
  //     ? dispatch(decrementShares(release.share_count))
  //     : dispatch(incrementShares(release.share_count));
  //   setItemShared(true);
  // }

  return (
    <>
      <Item.Group>
        <Segment.Group>
          <Segment>
            <Item.Group link as={NavLink} to={`/projects/${release.id}`}>
              <Item>
                <Item.Image size='tiny' circular src={release.hostPhotoURL} />
                <Item.Content inverted>
                  <Item.Header content={release.project_name} />
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Segment>
            <span inverted>
              {/* <Icon name='clock' /> {release.date_released.toString()} */}
            </span>
          </Segment>
          <Segment secondary>
            {release.audioUrl && (
              <audio src={release.audioUrl} preload='auto' controls />
            )}
          </Segment>
          <Segment clearing>
            <Button
              onClick={handleOnLikeClick}
              size='medium'
              as='div'
              labelPosition='right'
              floated='right'
            >
              <Button color='black' icon>
                <Icon size='large' name='star' />
                <Label as='a' basic>
                  {release.like_count ? release.like_count : 0}
                </Label>
              </Button>
            </Button>
            <Button
              size='medium'
              as='div'
              labelPosition='right'
              floated='right'
            >
              <Button color='black' icon>
                <Icon size='large' name='share' />
                <Label as='a' basic>
                  1234
                  {/* {release.like_count} */}
                </Label>
              </Button>
            </Button>
            {/* <Button icon='share' floated='right'></Button> */}

            {/* <Button icon='star' color='black' floated='right'></Button> */}
          </Segment>
        </Segment.Group>
      </Item.Group>
    </>
  );
}
