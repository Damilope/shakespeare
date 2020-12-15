import React from "react";
import styled from "@emotion/styled";
import SearchResultContent from "./SearchResultContent";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export interface ISearchResultProps {
    result: string[];
}

const SearchResult: React.FC<ISearchResultProps> = (props) => {
    const { result } = props;
    const [pageIndex, setPageIndex] = React.useState(
        result.length - result.length + 1
    );
    const total = result.length;

    const onPrev = React.useCallback(() => {
        if (pageIndex > 1) {
            setPageIndex(pageIndex - 1);
        }
    }, [pageIndex]);

    const onNext = React.useCallback(() => {
        if (pageIndex < total) {
            setPageIndex(pageIndex + 1);
        }
    }, [pageIndex, total]);

    if (total === 0) {
        return (
            <ContentContainer>
                <EmptyContainer>Nothing found!</EmptyContainer>
            </ContentContainer>
        );
    }

    return (
        <Container>
            <ContentContainer>
                <SearchResultContent content={result[pageIndex - 1]} />
            </ContentContainer>
            <PageIndexContainer>
                <PageIndexSpan>
                    {pageIndex} of {total}
                </PageIndexSpan>
                <Btn onClick={onPrev} disabled={pageIndex === 1}>
                    <LeftOutlined style={{ fontSize: "12px" }} />
                </Btn>
                <Btn onClick={onNext} disabled={pageIndex === total}>
                    <RightOutlined style={{ fontSize: "12px" }} />
                </Btn>
            </PageIndexContainer>
        </Container>
    );
};

export default SearchResult;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const PageIndexContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
`;

const PageIndexSpan = styled.span`
    font-size: 12px;
    display: inline-block;
`;

const ContentContainer = styled.div`
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 2px 6px 4px rgba(189, 170, 165, 0.1);
    border-radius: 9px;
    flex: 1;
    margin: 8px 0;
    padding: 50px 55px;
    align-items: center;
    display: flex;
`;

const EmptyContainer = styled.p`
    color: #000000;
    opacity: 0.8;
    width: 100%;
    text-align: center;
`;

const Btn = styled.button`
    background: inherit;
    border: none;
    display: inline-block;
    margin-left: 12px;
    padding: 0;
    outline: none;
`;
