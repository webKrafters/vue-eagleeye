import type { HeadFC } from 'gatsby';

import type { PageProps } from '../contexts/page';

import React from 'react';

import Anchor from '../partials/anchor';
import CodeBlock from '../partials/code-block';
import Header from '../partials/segment-header';
import Name from '../partials/name';
import NotePad from '../partials/pad/note';
import Paragraph from '../partials/paragraph';

const GettingStartedPage : React.FC<PageProps> = ({ className }) => (
    <article className={ `getting-started-page ${ className }` }>
        <h1>Getting Started</h1>
        <BodyCurrent />
    </article>
);

export default GettingStartedPage;

export const Head : HeadFC = () => ( <title>Getting Started</title> );

const creatorCode_7_0_0 =
`import { createEagleEye } from '@webkrafters/vue-eagleeye';
const MyContext = createEagleEye({
    a: { b: { c: null, x: { y: { z: [ 2022 ] } } } }
});
export const useMyStream = MyContext.stream;
export default MyContext;`

const containerCode =
`<script lang="ts" setup>
    import { defineProps, onUpdated } from 'vue';
    import MyContext from './context';
    import Ui from './ui';
                            
    const props = definedProps<{ c : number }>();

    const ageInMinutes = computed (() => props.c ?? 0 );

    onUpdated(() => MyContext.store.setState({ c: ageInMinutes }));
</script>
<template>
    <Ui />
</tempate>`;

const streamContextConstantsCode_7_0_0 =
`export const selectorMap = { year: 'a.b.x.y.z[0]' };`;

const streamContextCode_7_0_0_1 =
`<script lang="ts" setup>
    import { useMyStream } from './context';
    import { SelectorMap } from './constants';

    const { data } = useMyStream( SelectorMap );

</script>
<template>
    <div>Year: {{ data.year }}</div>
</template>`;

const streamContextCode_7_0_0_2 =
`<script lang="ts" setup>
    import { watch } from 'vue';
    import { useMyStream } from './context';
    import { SelectorMap } from './constants';

    const { data, setState, resetState } = useMyStream( SelectorMap );

    const onChange = e => setState({
        a: { b: { x: { y: { z: { 0: e.target.value } } } } }
    });

    watch( data.year, () => data.year > 2049 && resetState([ 'a.b.c' ]);
</script>
<template>
    <div>Year: <input type="number" @change="onChange" /></div>
</template>`;              

const streamContextCode_7_0_0 =
`<script setup lang="ts">
    import Client1 from './Client1';
    import Client2 from './Client2';
</script>
<template>
    <div>
        <Client1 />
        <Client2 />
    </div>
</template>`;

const setupCode_7_0_0 =
`<script>
    import type { Ref } from 'vue';

    const MILLIS_PER_MINUTE = 6e4;

    let numCreated = 0;

    const getNextBDayTimer = (
        e : { age : Ref<number> }
    ) => setTimeout(() => e.age++, MILLIS_PER_MINUTE );
</script>
<script setup lang="ts">
    import { onBeforeUnmount, ref, watch } from 'vue';
    import Container from './container';

    const testNumber = ++numCreated;

    const age = ref( 0 );

    let t = getNextBDayTimer({ age });

    watch( age, () => {
        clearTimeout( t );
        t = getNextBDayTimer({ age });
    } );

    onBeforeUnmount(() => clearTimeout( t ));
</script>
<template>
    <div>
        <h2>App instance #: {{ testNumber }}</H2>
        <Container :ageInMinutes="age" />
    </div>
</template>`;

function BodyCurrent() {
    return (
        <>
            <Paragraph className="snippet-intro" id="install">
                <Name /> is an independent state manager, which once created, can be deployed at any location in all parts of the application without further ado. 
            </Paragraph>
            <Paragraph className="snippet-box" id="usage">
                <CodeBlock isInline>
                    npm install --save @webkrafters/vue-eagleeye
                </CodeBlock>
            </Paragraph>
            <Paragraph className="snippet-intro" id="create-context-usage">
                <h3>Creating the <Name /> store</h3>
                To obtain a fresh context store, just call the <code>createEagleEye(...)</code> function. 
            </Paragraph>
            <Paragraph className="snippet-box">
                <Header>context.ts</Header>
                <CodeBlock>{ creatorCode_7_0_0 }</CodeBlock>
            </Paragraph>
            <Paragraph className="snippet-box">
                <Header>container.vue</Header>
                <CodeBlock>{ containerCode }</CodeBlock>
            </Paragraph>
            <div className="snippet-intro" id="streaming">
                <h3>Joining the <Name /> change stream</h3>
                <Paragraph><Name /> change stream is a reactive store whose data are automatically changing to reflect most recent changes affecting them. </Paragraph>
                <Paragraph>It embodies the "set-it-and-forget-it" paradigm. Just set up a list of property paths to state slices to observe { '(' }see <Anchor to="/concepts/selector-map">Selector Map</Anchor>{ ')' }. The context takes care of the rest.</Paragraph>z
                <Paragraph>The following shows how to join the <Name /> stream.</Paragraph>
                <Paragraph>We use the context's <code>stream(...)</code> property to obtain an active store exposing the context change stream to our consumer component.</Paragraph>
                <Paragraph><NotePad>Please note: Streams must be joined from within the setup script.</NotePad></Paragraph>
            </div>
            <Paragraph className="snippet-box">
                <Header>constants.ts</Header>
                <CodeBlock>{ streamContextConstantsCode_7_0_0 }</CodeBlock>
                <Header>Client1.vue</Header>
                <CodeBlock>{ streamContextCode_7_0_0_1 }</CodeBlock>
                <Header>Client2.vue</Header>
                <CodeBlock>{ streamContextCode_7_0_0_2 }</CodeBlock>
                <Header>Ui.vue</Header>
                <CodeBlock>{ streamContextCode_7_0_0 }</CodeBlock>
            </Paragraph>
            <Paragraph className="snippet-intro">
                The <Name /> runs decoupled from its embodying application, simply providing an active place for the application to accumulate, access, update and delete its various states as needed in ways that maintains immutability and integrity of state data. The following is a contrived snippet to demonstrate.
            </Paragraph>
            <Paragraph className="snippet-box">
                <Header>app.vue</Header>
                <CodeBlock>{ setupCode_7_0_0 }</CodeBlock>
            </Paragraph>
        </>
    );
}
