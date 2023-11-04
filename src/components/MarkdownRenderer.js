import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

const MarkDownStyle = styled.div`
    font-size: 1rem;
    line-height: 2.5rem;
`;

const markdown = `
# 헤딩
**굵게**
일반 텍스트

\`\`\`
    code block
\`\`\`

*기울이기*

> 인용문
`;

function MarkdownRenderer () {
    return (
        <MarkDownStyle>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </MarkDownStyle>
    );
}

export default MarkdownRenderer;