import React from 'react'
import {
    Grid, Paper, Stack, Typography,
    OutlinedInput, Button, Chip, ListItem
} from '@mui/material'
import { styled } from "@mui/material/styles";
import Scrollbar from '../../../components/scrollbar';
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------------------

const chipData = [
    { key: 0, label: 'Angularrrrrrrrrr', href: "/" },
    { key: 1, label: 'jQuery', href: "/" },
    { key: 2, label: 'Polymer', href: "/" },
    { key: 3, label: 'React', href: "/" },
    { key: 4, label: 'Vue.js', href: "/" },
    { key: 5, label: 'Polymer', href: "/" },
    { key: 6, label: 'React', href: "/" },
    { key: 7, label: 'Vue.js', href: "/" },
    { key: 8, label: 'React', href: "/" }];
// ----------------------------------------------------------------------------------
const SearchContainer = styled("div")({
    display: "flex",
    borderRadius: 20,
    overflow: "hidden",

});

const SearchInput = styled(OutlinedInput)({
    borderRadius: "50px 0 0 50px",
    flexGrow: 1,
    padding: "0 15px",

});

const SearchButton = styled(Button)({
    borderRadius: "0 50px 50px 0",
    padding: "0 40px",
});
// ----------------------------------------------------------------------------------

function SearchForm() {


    return (
        <>
            <Grid
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        borderRadius: '16px',
                    },
                }}
            >

                <Paper elevation={3} >
                    <Stack spacing={2} sx={{ p: "24px 80px" }}>
                        <Typography variant="h3">Tra Cứu Thuốc, TPCN, Bệnh Lý...</Typography>

                        <SearchContainer>
                            <SearchInput variant="standard" placeholder="Nhập từ khóa..." />
                            <SearchButton variant="contained">
                                <Iconify icon="eva:search-fill" sx={{ width: 25, height: 25 }} />
                            </SearchButton>
                        </SearchContainer>
                        <Stack>
                            <Typography variant="subtitle1"> Tra Cứu Hàng Đầu</Typography>
                            <Scrollbar
                                sx={{
                                    height: 1,
                                    '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'row' },
                                }}
                            >
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
                            </Scrollbar>

                        </Stack>

                    </Stack>
                </Paper>
            </Grid>
        </>
    )
}

export default SearchForm