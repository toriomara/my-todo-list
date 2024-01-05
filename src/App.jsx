// https://github.com/VasilyMur/React_Redux_Base/tree/main
// https://www.youtube.com/watch?v=13Th8jv0jO0

// https://github.com/UptraderTestTask/Junior-frontend

import { Route, Routes } from 'react-router-dom';
import { PureLayout } from './layouts/PureLayout';
import { ProjectLayout } from './layouts/ProjectLayout';
import { HomePage } from './pages/home';
import { TasksPage } from './pages/tasks';
import { NotFoundPage } from './pages/notFound';
import { ProjectPage } from './pages/project';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PureLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route element={<ProjectLayout />}>
        <Route path='/project/:id' element={<ProjectPage />} />
        <Route path='/tasks' element={<TasksPage />} />
      </Route>
      <Route path='*' element={<PureLayout />}>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>

    // <Routes>
    //   <Route path='/' element={<PureLayout />}>
    //     <Route index element={<HomePage />} />
    //   </Route>
    //   <Route path='/project/:id' element={<ProjectLayout />}>
    //     <Route index element={<Project />} />
    //   </Route>
    //   <Route path='/tasks' element={<ProjectLayout />}>
    //     <Route index element={<Tasks />} />
    //   </Route>
    //   <Route path='*' element={<PureLayout />}>
    //     <Route path='*' element={<NotFound />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
