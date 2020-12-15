import React from "react";
import styled from "@emotion/styled";

export interface ISearchResultContentProps {
    content: string;
}

const SearchResultContent: React.FC<ISearchResultContentProps> = (props) => {
    const { content } = props;

    return <ContentContainer>{content}</ContentContainer>;
};

export default SearchResultContent;

const ContentContainer = styled.p`
    color: #000000;
    opacity: 0.8;
    margin: 0;
    line-height: 24px;
    text-overflow: ellipsis;
    font-size: 13px;
`;
