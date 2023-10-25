import Analytics, { type AnalyticsProps } from './Analytics';
import List from "./List"

// interface PropsDispatch {
//     List: ListProps,
//     Analytics: AnalyticsProps,
// }
const dispatch = { Analytics, List };
interface Props {
	logsViewName: keyof typeof dispatch;
}

export default function LogsLoader(props: Props) {
	// console.log(LogsView)
	const { logsViewName, ...viewSpecificProps } = props;
	const LogsView = dispatch[logsViewName];

	//? typing (TS) this is annoying
	return <LogsView {...viewSpecificProps} />;
}
