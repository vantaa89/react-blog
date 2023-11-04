import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';


const MarkDownStyle = styled.div`
    font-size: 1rem;
    line-height: 2.5rem;
`;

const MarkdownRenderer = ({markdown}) => {
    console.log(markdown);
    return (
        <MarkDownStyle>
            <ReactMarkdown
                children={markdown}
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    code(props) {
                        const {children, className, node, ...rest} = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                        <SyntaxHighlighter
                            {...rest}
                            children={String(children).replace(/\n$/, '')}
                            style={materialDark}
                            language={match[1]}
                            PreTag="div"
                        />
                        ) : (
                        <code {...rest} className={className}>
                            {children}
                        </code>
                        )
                    }
                    }}
                />
        </MarkDownStyle>
    );
}

export default MarkdownRenderer;