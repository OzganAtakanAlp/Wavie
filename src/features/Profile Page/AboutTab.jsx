import React, { useState } from "react";
import { Button, Grid, Header, Tab } from "semantic-ui-react";

export default function AboutTab({ profile }) {
  const [editMode, setEditMode] = useState(false);
  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16}>
          <Header
            floated='left'
            icon='user'
            content={`About ${profile.display_name}`}
          />
          <Button
            onClick={() => setEditMode(true)}
            floated='right'
            basic
            content={editMode ? "Cancel" : "Edit"}
          />
        </Grid.Column>
        <Grid.Colum width={16}>
          {editMode ? (
            <p>Profile form</p>
          ) : (
            <>
              <div style={{ marginBottom: 10 }}>
                <strong>Member since: </strong>
                <div>{profile.description || null}</div>
              </div>
            </>
          )}
        </Grid.Colum>
      </Grid>
    </Tab.Pane>
  );
}
