import React from "react";
import styled from "@emotion/styled";
import Icon, { ArrowRightOutlined, LoadingOutlined } from "@ant-design/icons";

export interface ISearchBoxProps {
    loading?: boolean;
    onSearch: (val: string) => void;
}

const SearchBox: React.FC<ISearchBoxProps> = (props) => {
    const { loading, onSearch } = props;
    const [value, onChange] = React.useState("");
    const [prevSearchValue, setPrevSearchValue] = React.useState("");

    const handleSearch = React.useCallback(() => {
        onSearch(value);
        setPrevSearchValue(value);
    }, [value, onSearch]);

    return (
        <Container>
            <InputContainer>
                <SearchIcon
                    style={{
                        color: "#9B9186",
                        fontSize: "32px",
                    }}
                />
                <Input
                    type="text"
                    placeholder="What art thee looking f'r?"
                    value={value}
                    onChange={(evt) => onChange(evt.target.value)}
                    disabled={loading}
                />
                {value && !loading && value !== prevSearchValue ? (
                    <SearchBtn onClick={handleSearch}>
                        <ArrowRightOutlined
                            style={{
                                color: "#9B9186",
                                fontSize: "32px",
                            }}
                        />
                    </SearchBtn>
                ) : null}
                {loading && (
                    <LoadingOutlined
                        style={{
                            color: "#9B9186",
                            fontSize: "32px",
                        }}
                    />
                )}
            </InputContainer>
            <SearchUnderlineIcon className="shakespeare-search-underline-svg" />
        </Container>
    );
};

export default SearchBox;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;

    .shakespeare-search-underline-svg > svg {
        max-width: 100%;
    }
`;

const InputContainer = styled.div({
    width: "100%",
    display: "flex",
    alignItems: "center",
});

const Input = styled.input`
    height: 44px;
    border: none;
    background: inherit;
    flex: 1;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 35px;
    color: black;
    padding: 4px 16px;
    // text-align: center;
    outline: none;
    opacity: 0.8;
`;

const SearchBtn = styled.button`
    border: none;
    background: inherit;
    outline: none;
`;

const SearchUnderlineSvg = () => (
    <svg
        width="675"
        height="54"
        viewBox="0 0 675 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1 49.5225C25.6331 49.7764 50.1696 51.4381 74.7778 52.4114C128.676 54.5429 181.808 50.6074 235.333 44.3002C347.719 31.0573 462.729 10.9558 576.222 20.6336C587.218 21.5712 604.239 21.8441 614.333 27.5225C625.834 33.9916 587.964 29.5684 574.778 29.078C473.488 25.311 372.362 25.9345 271 25.5225C193.598 25.2078 115.591 17.2948 38.2222 22.5225C17.8662 23.8979 31.9464 23.6484 43.4444 23.4114C88.3808 22.4848 133.272 18.3643 178.111 15.5225C300.071 7.79261 421.455 2.56682 543.667 5.07802C580.811 5.84125 618.084 7.5729 655.222 5.96691C663.069 5.62758 683.928 7.16501 667 1.52246"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const SearchUnderlineIcon = (props: React.ComponentProps<typeof Icon>) => (
    <Icon component={SearchUnderlineSvg} {...props} />
);

const SearchSvg = () => (
    <svg
        width="32"
        height="32"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M29.5977 27.4648L37.4498 35.3151L34.8557 37.9093L27.0054 30.0571C24.0844 32.3987 20.4512 33.6723 16.7075 33.667C7.59952 33.667 0.20752 26.275 0.20752 17.167C0.20752 8.05899 7.59952 0.666992 16.7075 0.666992C25.8155 0.666992 33.2075 8.05899 33.2075 17.167C33.2128 20.9107 31.9393 24.5438 29.5977 27.4648ZM25.92 26.1045C28.2467 23.7118 29.5461 20.5044 29.5408 17.167C29.5408 10.0757 23.797 4.33366 16.7075 4.33366C9.61619 4.33366 3.87419 10.0757 3.87419 17.167C3.87419 24.2565 9.61619 30.0003 16.7075 30.0003C20.045 30.0056 23.2523 28.7062 25.645 26.3795L25.92 26.1045Z"
            fill="#9B9186"
        />
    </svg>
);

const SearchIcon = (props: React.ComponentProps<typeof Icon>) => (
    <Icon component={SearchSvg} {...props} />
);
