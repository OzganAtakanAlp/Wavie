import React from 'react';
import { Grid } from 'semantic-ui-react';
import ProjectDetailedChat from './ProjectDetailedChat';
import ProjectDetailedHeader from './ProjectDetailedHeader';
import ProjectDetailedInfo from './ProjectDetailedInfo';
import ProjectDetailedSidebar from './ProjectDetailedSidebar';

export default function ProjectDetailedPage(){
    return(
        <Grid>
            <Grid.Column width={10}>
                <ProjectDetailedHeader />
                <ProjectDetailedInfo />
                <ProjectDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                    <ProjectDetailedSidebar />
                </Grid.Column>
        </Grid>
    )
}