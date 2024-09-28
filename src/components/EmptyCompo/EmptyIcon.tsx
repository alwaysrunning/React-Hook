import { ReactComponent as EmptySvg } from './icons/empty-icon.svg';
import { ReactComponent as AddEmptySvg } from './icons/add-empty-icon.svg';
import { ReactComponent as ListEmptySvg } from './icons/list-empty-icon.svg';
import styles from './index.module.less';
import classNames from 'classnames';

const EmptyIconType = {
  empty: EmptySvg,
  addEmpty: AddEmptySvg,
  listEmpty: ListEmptySvg,
};

interface IEmptyIconProps {
  type: keyof typeof EmptyIconType;
  style?: React.CSSProperties;
  center?: boolean;
}

const EmptyIcon = (props: IEmptyIconProps) => {
  const Comp = EmptyIconType[props.type];

  return (
    <Comp
      style={props.style}
      className={classNames([
        styles.icon_wrap,
        {
          [styles.center]: props.center,
        },
      ])}
    ></Comp>
  );
};

export default EmptyIcon;
