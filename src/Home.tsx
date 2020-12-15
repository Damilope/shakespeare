import React from "react";
import ShakespearePNG from "./assets/shakespeare.png";
import styled from "@emotion/styled";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";

const Home: React.FC<{}> = () => {
    const [loading, setLoading] = React.useState(false);
    const [result, setResult] = React.useState<string[]>();

    const onSearch = React.useCallback(async (val: string) => {
        setLoading(true);

        const response = await fetch(`/search?q=${val}`);
        const searchResult = await response.json();

        setResult(searchResult);
        setLoading(false);
    }, []);

    return (
        <Container>
            <DesktopSizeContainer>
                <Header>Shakespeare</Header>
                <ContentContainer>
                    <SearchBoxContainer>
                        <SearchBox loading={loading} onSearch={onSearch} />
                    </SearchBoxContainer>
                    {result && (
                        <ResultContainer>
                            <SearchResult result={result} />
                        </ResultContainer>
                    )}
                </ContentContainer>
                {!result && (
                    <ShakespeareImg src={ShakespearePNG} alt="Shakespeare" />
                )}
            </DesktopSizeContainer>
            <NotMobileOptimized>Not mobile optimized!</NotMobileOptimized>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 700px;
`;

const NotMobileOptimized = styled.div`
    @media (max-width: 1020px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        page-index: 109;
        background: inherit;
        color: black;
        font-size: 24px;
        opacity: 0.3;
    }

    display: none;
`;

const DesktopSizeContainer = styled.div`
    @media (max-width: 1020px) {
        display: none;
    }

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 29px 45px;
    box-sizing: border-box;
    background: #e1ddd7;
    position: relative;
`;

const Header = styled.div`
    color: black;
    font-size: 24px;
    opacity: 0.3;
`;

const ContentContainer = styled.div`
    display: flex;
    flex: 1;
`;

const SearchBoxContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    z-index: 99;
    margin-right: 16px;
`;

const ResultContainer = styled.div`
    display: flex;
    flex: 1;
    margin-left: 16px;
`;

const ShakespeareImg = styled.img`
    position: absolute;
    width: 400px;
    // height: 607px;
    bottom: 0;
    right: 0;
`;
