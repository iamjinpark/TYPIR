import CategoryButton from '../atoms/CategoryButton/CategoryButton.jsx';
import Category from '@/molecules/Category/Category.jsx';
import FileInput from '@/atoms/FileInput/FileInput.jsx';
import ImageAddButton from '@/atoms/FileInput/FileInput.jsx';

function App() {
  return (
    <div>
      <Category />
      <FileInput />
      <ImageAddButton />
    </div>
  );
}

export default App;
