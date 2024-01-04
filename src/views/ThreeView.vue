<script setup lang="ts">

import { TresCanvas } from '@tresjs/core';
import { Color } from 'three';

</script>

<template>


        <div id="myCanvasWrapper">

                <TresCanvas clear-color="#82DBC5">

                        <TresPerspectiveCamera :position="[4, 4, 4]" :look-at="[0, 0, 0]" />

                        

                        <TresMesh :position="[0, 1, 0]" :scale="[1, 2, 0.5]" :rotation="[Math.PI /4, 0, 0]">
                                <TresBoxGeometry />

                                <TresMeshBasicMaterial  :color="new Color('red')"/>
                        </TresMesh>
                        
                        <TresAxesHelper />
                </TresCanvas>
        </div>
        
</template>

<style scoped lang="scss">

#myCanvasWrapper {
        margin: 0;
        padding: 0;
        height: 600px;
        width: 600px;
}


</style>