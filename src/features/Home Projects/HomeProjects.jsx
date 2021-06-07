import React,{useState} from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import ProjectList from './ProjectList'
import {sampleData} from '../../app/api/sampleData'

export default function HomeProjects() {

    const [projects, setEvents] = useState(sampleData);

    return (
        <Grid>
            <GridColumn width={4}>
                <h2>Left column</h2>
            </GridColumn>
            <GridColumn width={12}>
                <ProjectList projects={projects} />
            </GridColumn>
            
        </Grid>
        
    )
}

