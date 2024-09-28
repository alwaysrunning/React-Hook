import { useRequest } from '@/hooks';
import { Button } from "antd";
import { PageLoading } from '@/components';
const Request = () => {
  const [{ loading, error, data }, retry] = useRequest(
    {
      url: security.FetchUser,
    },
    {
      manual: true,
    }
  );
  return (
    <div
      style={{
        padding: 16,
      }}
    >
      <Button type="primary" onClick={() => retry()}>
        Retry
      </Button>
      { 
        loading ? <PageLoading/> :
          <div
            style={{
              background: '#f00',
              padding: 8,
              borderRadius: 4,
              width: '100%',
              lineHeight: '12px'
            }}
            >
            {JSON.stringify(data, null, 2) || '--'}
          </div>
      }
    </div>
  );
};

export default Request;
