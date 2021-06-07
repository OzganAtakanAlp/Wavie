import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'

export default function HomeProjects() {
    return (
        <Grid>
            <GridColumn width={4}>
                <h2>Left column</h2>
            </GridColumn>
            <GridColumn width={8}>
                <h2>Middle column</h2>
            </GridColumn>
            <GridColumn width={4}>
                <h2>Right column</h2>
            </GridColumn>
        </Grid>
        
    )
}

