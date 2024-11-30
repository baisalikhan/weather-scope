import WeatherSkeleton from '@/components/LoadingSkeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button'
import { useGeoLocation } from '@/hooks/useGeoLocation'
import { AlertTriangle, MapPin, RefreshCw } from 'lucide-react'

const WeatherDashboard = () => {
    const {
        coordinates,
        error: locationError,
        isLoading: locationLoading,
        getLocation,
      } = useGeoLocation();

      const handleRefresh = () => {
        getLocation();
        if (coordinates) {
        //   weatherQuery.refetch();
        //   forecastQuery.refetch();
        //   locationQuery.refetch();
        }
      };

      if (locationLoading) {
        return <WeatherSkeleton />;
      }

      if (locationError) {
        return (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Location Error</AlertTitle>
            <AlertDescription className="flex flex-col gap-4">
              <p>{locationError}</p>
              <Button variant="outline" onClick={getLocation} className="w-fit">
                <MapPin className="mr-2 h-4 w-4" />
                Enable Location
              </Button>
            </AlertDescription>
          </Alert>
        );
      }

      if (!coordinates) {
        return (
          <Alert variant="destructive">
            <AlertTitle>Location Error</AlertTitle>
            <AlertDescription className="flex flex-col gap-4">
              <p>Please enable your location access to see your local weather</p>
              <Button variant="outline" onClick={getLocation} className="w-fit">
                <MapPin className="mr-2 h-4 w-4" />
                Enable Location
              </Button>
            </AlertDescription>
          </Alert>
        );
      }

    return (
        <div className="space-y-4">
            {/* <FavoriteCities /> */}
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold tracking-tight">My Location</h1>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={handleRefresh}
                    // disabled={weatherQuery.isFetching || forecastQuery.isFetching}
                >
                    {/* <RefreshCw
                        className={`h-4 w-4 ${weatherQuery.isFetching ? "animate-spin" : ""
                            }`} */}
                            <RefreshCw
                        className={`h-4 w-4`}
                    />
                </Button>
            </div></div>
    )
}

export default WeatherDashboard