import { Spin } from 'antd';

interface LoadingProps {
  loadingText?: string;
  padding?: string | number;
  height?: number;
}

export default function PageLoading(props: LoadingProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: props.padding || 100,
        height: props.height || 'auto',
      }}
    >
      <Spin tip={props.loadingText || '加载中...'} />
    </div>
  );
}
