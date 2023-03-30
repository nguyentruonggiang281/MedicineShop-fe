import React from 'react'
import { Grid, Paper, Stack, Typography, TextField, Button, Chip, ListItem } from '@mui/material'



const chipData = [
    { key: 0, label: 'Angularrrrrrrrrr', href: "/blog" },
    { key: 1, label: 'jQuery', href: "/blog" },
    { key: 2, label: 'Polymer', href: "/blog" },
    { key: 3, label: 'React', href: "/blog" },
    { key: 4, label: 'Vue.js', href: "/blog" },
    { key: 5, label: 'Polymer', href: "/blog" },
    { key: 6, label: 'React', href: "/blog" },
    { key: 7, label: 'Vue.js', href: "/blog" },
    { key: 8, label: 'React', href: "/blog" }];


function SearchForm(){


    return (
        <>
            <Grid
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: "100%",
                        height: "100%",
                        position: "relative",
                    },
                }}
            >

                <Paper elevation={3} >
                    <Stack spacing={2} sx={{ p: "24px 80px" }}>
                        <Typography variant="h3">Tra Cứu Thuốc, TPCN, Bệnh Lý...</Typography>

                        <TextField
                            variant="standard"
                            placeholder="Search..."
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                        >
                            Search
                        </Button>
                        <Stack>
                            <Typography variant="subtitle1"> Tra Cứu Hàng Đầu</Typography>
                            <Stack direction="row" >
                                {chipData.map((data) => {
                                    return (
                                        <ListItem key={data.key}>
                                            <Chip
                                                label={data.label}
                                                component="a" href={data.href} clickable
                                            />
                                        </ListItem>
                                    );
                                })}
                            </Stack>
                        </Stack>

                    </Stack>
                </Paper>
            </Grid>
        </>
    )
}

export default SearchForm