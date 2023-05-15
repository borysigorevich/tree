import {Canvas} from '@react-three/fiber'
import SceneContainer from "./components/SceneContainer";

function App() {

    return (
        <div style={{
            height: '100%'
        }}>
            <Canvas>
                <SceneContainer/>
            </Canvas>
        </div>
    )
}

export default App
